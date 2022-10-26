package br.com.entra21.olimpic.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "team")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Team extends MaturidadeNivel3Richardson{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String full_name;
	private String funcao;
	private String funcao_about;
	private String social_linkedin;
	private String social_github;
	private String social_instagram;
	private String img_team;
	
	public Team() {
		super();
	}

	public Team(Integer id, String full_name, String funcao, String funcao_about, String social_linkedin,
			String social_github, String social_instagram, String img_team) {
		super();
		this.id = id;
		this.full_name = full_name;
		this.funcao = funcao;
		this.funcao_about = funcao_about;
		this.social_linkedin = social_linkedin;
		this.social_github = social_github;
		this.social_instagram = social_instagram;
		this.img_team = img_team;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getFuncao() {
		return funcao;
	}

	public void setFuncao(String funcao) {
		this.funcao = funcao;
	}

	public String getFuncao_about() {
		return funcao_about;
	}

	public void setFuncao_about(String funcao_about) {
		this.funcao_about = funcao_about;
	}

	public String getSocial_linkedin() {
		return social_linkedin;
	}

	public void setSocial_linkedin(String social_linkedin) {
		this.social_linkedin = social_linkedin;
	}

	public String getSocial_github() {
		return social_github;
	}

	public void setSocial_github(String social_github) {
		this.social_github = social_github;
	}

	public String getSocial_instagram() {
		return social_instagram;
	}

	public void setSocial_instagram(String social_instagram) {
		this.social_instagram = social_instagram;
	}

	public String getImg_team() {
		return img_team;
	}

	public void setImg_team(String img_team) {
		this.img_team = img_team;
	}
	
}
