/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.webapp.vision;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author mbruzaca
 */
@javax.persistence.Entity
public class Estado implements Serializable {

    @Id
    String uf;
    Integer cidades;

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public Integer getCidades() {
        return cidades;
    }

    public void setCidades(Integer cidades) {
        this.cidades = cidades;
    }

    public Estado(String uf, Integer cidades) {
        this.uf = uf;
        this.cidades = cidades;
    }

}
