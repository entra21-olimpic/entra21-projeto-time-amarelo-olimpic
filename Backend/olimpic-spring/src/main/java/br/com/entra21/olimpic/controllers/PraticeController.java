package br.com.entra21.olimpic.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.entra21.olimpic.model.ItemNivel3;
import br.com.entra21.olimpic.model.Pratice;
import br.com.entra21.olimpic.repository.IPraticeRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/pratice")
public class PraticeController {

	@Autowired
	private IPraticeRepository praticeRepository;

	@GetMapping()
	@ResponseStatus(HttpStatus.OK)
	public List<Pratice> listar() {

		List<Pratice> response = praticeRepository.findAll();

		response.forEach(pratice -> {

			setMaturidadeNivel3(pratice);

		});

		return response;

	}

	@PostMapping("/data")
	@ResponseStatus(HttpStatus.CREATED)
	public @ResponseBody Pratice resultPratice(@RequestBody Pratice data) {
		return praticeRepository.save(data);
	}

	@GetMapping("/returnpratice")
	public ArrayList<Object> listName() {
		return praticeRepository.getPratice();
	}

	private void setMaturidadeNivel3(Pratice pratice) {

		final String PATH = "localhost:8080/pratice";

		pratice.setLinks(new ArrayList<>());

		pratice.getLinks().add(new ItemNivel3("GET", PATH));
		pratice.getLinks().add(new ItemNivel3("GET", PATH + "/" + pratice.getId()));

	}

}
