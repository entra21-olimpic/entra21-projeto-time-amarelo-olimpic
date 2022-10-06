package br.com.entra21.olimpic.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "faq")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

public class Faq extends MaturidadeNivel3Richardson {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String message;
	private String name;
	private String email;
	private String answer;
	
	public Faq() {
		super();
	}

	public Faq(Integer id, String message, String name, String email, String answer) {
		super();
		this.id = id;
		this.message = message;
		this.name = name;
		this.email = email;
		this.answer = answer;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	
}
