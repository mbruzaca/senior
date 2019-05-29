/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.webapp.controller;

import br.com.webapp.dao.CidadeJpaController;
import br.com.webapp.domain.Cidade;
import br.com.webapp.util.GeoUtils;
import br.com.webapp.vision.Estado;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import javax.persistence.EntityManager;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Usuario
 */
@Controller
@RequestMapping("/cidades")
public class CidadeController {

    @Autowired
    CidadeJpaController cidadeJPA;

    @RequestMapping({"/", ""})
    public String index() {
        return "index";
    }

    @RequestMapping("/capitais")
    @ResponseBody
    public List<Cidade> capitais() {
        //return cidadeJPA.findCidadeEntities().stream().filter(c -> c.getCapital()).collect(Collectors.toList());
        return cidadeJPA.getEntityManager().createNativeQuery("SELECT * FROM cidade WHERE capital IS TRUE ORDER BY nome ASC", Cidade.class).getResultList();
    }

    @RequestMapping("/maiorEstado")
    @ResponseBody
    public Estado maiorEstado() {
        try {
            Object[] maiorEstado = (Object[]) cidadeJPA.getEntityManager().createNativeQuery("SELECT c.uf, COUNT(c.ibge_id) quantidade_cidades FROM cidade c GROUP BY c.uf ORDER BY quantidade_cidades DESC LIMIT 1").getSingleResult();
            return new Estado(maiorEstado[0].toString(), Integer.valueOf(maiorEstado[1].toString()));
        } catch (Exception e) {
            return null;
        }
    }

    @RequestMapping("/menorEstado")
    @ResponseBody
    public Estado menorEstado() {
        try {
            Object[] maiorEstado = (Object[]) cidadeJPA.getEntityManager().createNativeQuery("SELECT c.uf, COUNT(c.ibge_id) quantidade_cidades FROM cidade c GROUP BY c.uf ORDER BY quantidade_cidades ASC LIMIT 1").getSingleResult();
            return new Estado(maiorEstado[0].toString(), Integer.valueOf(maiorEstado[1].toString()));
        } catch (Exception e) {
            return null;
        }
    }

    @RequestMapping("/porEstado")
    @ResponseBody
    public List<Estado> porEstado() {
        List<Estado> estados = new ArrayList();
        try {
            for (Object[] estadoObject : (List<Object[]>) cidadeJPA.getEntityManager().createNativeQuery("SELECT c.uf, COUNT(c.ibge_id) quantidade_cidades FROM cidade c GROUP BY c.uf ORDER BY c.uf ASC").getResultList()) {
                estados.add(new Estado(estadoObject[0].toString(), Integer.valueOf(estadoObject[1].toString())));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return estados;
    }

    @RequestMapping("/porEstado/{estado}")
    @ResponseBody
    public List<Cidade> findByEstado(@PathVariable String estado) {
        try {
            return cidadeJPA.findByEstado(estado);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping("/quantidade")
    @ResponseBody
    public Integer quantidade() {
        try {
            return cidadeJPA.getCidadeCount();
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @RequestMapping("/ibge/{IdIbge}")
    @ResponseBody
    public Cidade findByIbge(@PathVariable String IdIbge) {
        try {
            return cidadeJPA.findCidade(Integer.valueOf(IdIbge));
        } catch (Exception e) {
            return null;
        }
    }

    @RequestMapping("/filtrarDistinto/{campo}/{valor}")
    @ResponseBody
    public Integer filtarCampoDistinto(@PathVariable String campo, @PathVariable String valor) {
        try {
            return cidadeJPA.getEntityManager().createNativeQuery("SELECT COUNT(DISTINCT "+campo+") FROM cidade WHERE " + campo + " = ? ").setParameter(1, valor).getResultList().size();
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @RequestMapping("/filtrar/{campo}/{valor}")
    @ResponseBody
    public List<Cidade> filtarCampo(@PathVariable String campo, @PathVariable String valor) {
        try {
            valor = "%" + valor + "%";
            return cidadeJPA.getEntityManager().createNativeQuery("SELECT * FROM cidade WHERE " + campo + " LIKE ? ", Cidade.class).setParameter(1, valor).getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping("/remover/{IdIbge}")
    @ResponseBody
    public ResponseEntity remover(@PathVariable String IdIbge) {
        try {
            cidadeJPA.destroy(Integer.valueOf(IdIbge));
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping("/cadastrar")
    @ResponseBody
    public ResponseEntity cadastrarCidade(Cidade c) {
        try {
            cidadeJPA.create(c);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping("/popularBaseDados")
    @ResponseBody
    public HashMap<String, Object> popularBaseDados() {
        HashMap<String, Object> hashRetorno = new HashMap();
        EntityManager em = cidadeJPA.getEntityManager();
        try {
            String csvPath = projectPath() + File.separatorChar + "resources" + File.separatorChar + "csv" + File.separatorChar + "Trabalho Java - Cidades.csv";
            InputStream stream = new FileInputStream(csvPath);
            String content = IOUtils.toString(stream, StandardCharsets.UTF_8);
            List<String> linhas = Arrays.asList(content.split("\n"));
            em.getTransaction().begin();
            em.createNativeQuery("TRUNCATE cidade").executeUpdate();
            em.getTransaction().commit();
            for (String linha : linhas) {
                int index = linhas.indexOf(linha);
                if (index > 0) {
                    try {
                        Cidade cidade = new Cidade();
                        cidade.setIbgeId(Integer.valueOf(linha.split(",")[0]));
                        cidade.setUf(linha.split(",")[1]);
                        cidade.setNome(linha.split(",")[2]);
                        cidade.setCapital(linha.split(",")[3].equals("true"));
                        cidade.setLatitude(new BigDecimal(linha.split(",")[4]));
                        cidade.setLongitude(new BigDecimal(linha.split(",")[5]));
                        cidade.setNomeSemAcentuacao(linha.split(",")[6]);
                        cidade.setNomeAlternativo(linha.split(",")[7]);
                        cidade.setMicrorregiao(linha.split(",")[8]);
                        cidade.setMesorregiao(linha.split(",")[9]);
                        cidadeJPA.create(cidade);
                    } catch (Exception e) {
                        e.printStackTrace();
                        break;
                    }
                }
            }
            hashRetorno.put("sucesso", true);
            hashRetorno.put("mensagem", true);
        } catch (Exception e) {
            e.printStackTrace();
            hashRetorno.put("erro", true);
            hashRetorno.put("mensagem", "Erro ao popular base de dados");
        } finally {
            em.close();
            return hashRetorno;
        }
    }

    @RequestMapping("/maiorDistancia")
    @ResponseBody
    public HashMap<String, Object> cidadesMaisDistantes() {
        HashMap<String, Object> retorno = new HashMap();
        Cidade c1 = new Cidade();
        Cidade c2 = new Cidade();
        Double maiorDistancia = new Double(0);
        List<Cidade> cidades = cidadeJPA.findCidadeEntities();
        for (int i = 0; i < cidades.size(); i++) {
            for (int j = 0; j < cidades.size(); j++) {
                if (i != j) {
                    Double distancia = GeoUtils.geoDistanceInKm(cidades.get(i).getLatitude().doubleValue(), cidades.get(i).getLongitude().doubleValue(), cidades.get(j).getLatitude().doubleValue(), cidades.get(j).getLongitude().doubleValue());
                    if (distancia.compareTo(maiorDistancia) > 0) {
                        c1 = cidades.get(i);
                        c2 = cidades.get(j);
                        maiorDistancia = distancia;
                    }
                }
            }
        }
        retorno.put("cidade_1", c1);
        retorno.put("cidade_2", c2);
        retorno.put("distancia", maiorDistancia);
        return retorno;
    }

    public String projectPath() {
        return this.getClass().getClassLoader().getResource("").getPath().replace("WEB-INF/classes", "");
    }

}
