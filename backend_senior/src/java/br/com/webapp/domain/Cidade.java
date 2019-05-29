/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.webapp.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author mbruzaca
 */
@Entity
@Table(name = "cidade")
@NamedQueries({
    @NamedQuery(name = "Cidade.findAll", query = "SELECT c FROM Cidade c")
    , @NamedQuery(name = "Cidade.findByIbgeId", query = "SELECT c FROM Cidade c WHERE c.ibgeId = :ibgeId")
    , @NamedQuery(name = "Cidade.findByUf", query = "SELECT c FROM Cidade c WHERE c.uf = :uf")
    , @NamedQuery(name = "Cidade.findByNome", query = "SELECT c FROM Cidade c WHERE c.nome = :nome")
    , @NamedQuery(name = "Cidade.findByCapital", query = "SELECT c FROM Cidade c WHERE c.capital = :capital")
    , @NamedQuery(name = "Cidade.findByLatitude", query = "SELECT c FROM Cidade c WHERE c.latitude = :latitude")
    , @NamedQuery(name = "Cidade.findByLongitude", query = "SELECT c FROM Cidade c WHERE c.longitude = :longitude")
    , @NamedQuery(name = "Cidade.findByNomeSemAcentuacao", query = "SELECT c FROM Cidade c WHERE c.nomeSemAcentuacao = :nomeSemAcentuacao")
    , @NamedQuery(name = "Cidade.findByNomeAlternativo", query = "SELECT c FROM Cidade c WHERE c.nomeAlternativo = :nomeAlternativo")
    , @NamedQuery(name = "Cidade.findByMicrorregiao", query = "SELECT c FROM Cidade c WHERE c.microrregiao = :microrregiao")
    , @NamedQuery(name = "Cidade.findByMesorregiao", query = "SELECT c FROM Cidade c WHERE c.mesorregiao = :mesorregiao")})
public class Cidade implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "ibge_id")
    private Integer ibgeId;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2)
    @Column(name = "uf")
    private String uf;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "nome")
    private String nome;
    @Basic(optional = false)
    @NotNull
    @Column(name = "capital")
    private boolean capital;
    @Basic(optional = false)
    @NotNull
    @Column(name = "latitude")
    private BigDecimal latitude;
    @Basic(optional = false)
    @NotNull
    @Column(name = "longitude")
    private BigDecimal longitude;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "nome_sem_acentuacao")
    private String nomeSemAcentuacao;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "nome_alternativo")
    private String nomeAlternativo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "microrregiao")
    private String microrregiao;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "mesorregiao")
    private String mesorregiao;

    public Cidade() {
    }

    public Cidade(Integer ibgeId) {
        this.ibgeId = ibgeId;
    }

    public Cidade(Integer ibgeId, String uf, String nome, boolean capital, BigDecimal latitude, BigDecimal longitude, String nomeSemAcentuacao, String nomeAlternativo, String microrregiao, String mesorregiao) {
        this.ibgeId = ibgeId;
        this.uf = uf;
        this.nome = nome;
        this.capital = capital;
        this.latitude = latitude;
        this.longitude = longitude;
        this.nomeSemAcentuacao = nomeSemAcentuacao;
        this.nomeAlternativo = nomeAlternativo;
        this.microrregiao = microrregiao;
        this.mesorregiao = mesorregiao;
    }

    public Integer getIbgeId() {
        return ibgeId;
    }

    public void setIbgeId(Integer ibgeId) {
        this.ibgeId = ibgeId;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean getCapital() {
        return capital;
    }

    public void setCapital(boolean capital) {
        this.capital = capital;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public String getNomeSemAcentuacao() {
        return nomeSemAcentuacao;
    }

    public void setNomeSemAcentuacao(String nomeSemAcentuacao) {
        this.nomeSemAcentuacao = nomeSemAcentuacao;
    }

    public String getNomeAlternativo() {
        return nomeAlternativo;
    }

    public void setNomeAlternativo(String nomeAlternativo) {
        this.nomeAlternativo = nomeAlternativo;
    }

    public String getMicrorregiao() {
        return microrregiao;
    }

    public void setMicrorregiao(String microrregiao) {
        this.microrregiao = microrregiao;
    }

    public String getMesorregiao() {
        return mesorregiao;
    }

    public void setMesorregiao(String mesorregiao) {
        this.mesorregiao = mesorregiao;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (ibgeId != null ? ibgeId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Cidade)) {
            return false;
        }
        Cidade other = (Cidade) object;
        if ((this.ibgeId == null && other.ibgeId != null) || (this.ibgeId != null && !this.ibgeId.equals(other.ibgeId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "br.com.webapp.domain.Cidade[ ibgeId=" + ibgeId + " ]";
    }
    
}
