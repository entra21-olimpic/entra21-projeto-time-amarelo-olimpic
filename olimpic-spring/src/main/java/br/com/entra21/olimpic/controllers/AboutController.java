package br.com.entra21.olimpic.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.entra21.olimpic.model.ItemNivel3;
import br.com.entra21.olimpic.model.Profile;
import br.com.entra21.olimpic.model.Team;
import br.com.entra21.olimpic.repository.ITeamRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/about")
public class AboutController {

	@Autowired
	private ITeamRepository teamRepository;

	@GetMapping()
	@ResponseStatus(HttpStatus.OK)
	public List<Team> listar() {

		List<Team> response = teamRepository.findAll();

		response.forEach(team -> {

			setMaturidadeNivel3(team);

		});

		return response;

	}

	private void setMaturidadeNivel3(Team team) {

		final String PATH = "localhost:8080/about";

		ArrayList<String> headers = new ArrayList<String>();

		headers.add("Accept:application/json");
		headers.add("Content-type:application/json");

		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);

		try {

			Profile clone = mapper.readValue(mapper.writeValueAsString(team), Profile.class);
			clone.setLinks(null);
			String nomeAtual = clone.getName();
			clone.setName("Nome diferente");
			String jsonUpdate = mapper.writeValueAsString(clone);
			clone.setName(nomeAtual);
			clone.setId(null);
			String jsonCreate = mapper.writeValueAsString(clone);

			team.setLinks(new ArrayList<>());

			team.getLinks().add(new ItemNivel3("GET", PATH, null, null));
			team.getLinks().add(new ItemNivel3("GET", PATH + "/" + team.getId(), null, null));
		} catch (JsonProcessingException e) {

			e.printStackTrace();

		}

	}
}
