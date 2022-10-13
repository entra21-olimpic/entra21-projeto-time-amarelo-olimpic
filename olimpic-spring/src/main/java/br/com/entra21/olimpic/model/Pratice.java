package br.com.entra21.olimpic.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "pratice")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

public class Pratice extends MaturidadeNivel3Richardson {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private LocalDateTime date_pratice;
	private String duration;
	private Integer profile_id;

	public Pratice() {
		super();
	}

	public Pratice(Integer id, LocalDateTime date_pratice, String duration, Integer profile_id) {
		super();
		this.id = id;
		this.date_pratice = date_pratice;
		this.duration = duration;
		this.profile_id = profile_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getDate_pratice() {
		return date_pratice;
	}

	public void setDate_pratice(LocalDateTime date_pratice) {
		this.date_pratice = date_pratice;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public Integer getProfile_id() {
		return profile_id;
	}

	public void setProfile_id(Integer profile_id) {
		this.profile_id = profile_id;
	}

}
