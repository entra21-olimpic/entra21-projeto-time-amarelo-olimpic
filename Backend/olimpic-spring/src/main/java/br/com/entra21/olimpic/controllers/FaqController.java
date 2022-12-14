package br.com.entra21.olimpic.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.entra21.olimpic.model.Faq;
import br.com.entra21.olimpic.model.ItemNivel3;
import br.com.entra21.olimpic.repository.IFaqRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/faqs")

public class FaqController {

	@Autowired
	private IFaqRepository faqRepository;

	@GetMapping()
	@ResponseStatus(HttpStatus.OK)
	public List<Faq> listar() {

		List<Faq> response = faqRepository.findAll();
		response.forEach(faq -> {

			setMaturidadeNivel3(faq);

		});

		return response;

	}

	@PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public @ResponseBody Faq create(@RequestBody Faq newQuestion) {
		return faqRepository.save(newQuestion);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody Optional<Faq> update(@PathVariable("id") int param, @RequestBody Faq answerOk) {

		Faq atualizado = faqRepository.findById(param).get();
		atualizado.setAnswer(answerOk.getAnswer());

		faqRepository.save(atualizado);

		return faqRepository.findById(param);
	}

	private void setMaturidadeNivel3(Faq faq) {

		final String PATH = "localhost:8080/faqs";

		faq.setLinks(new ArrayList<>());

		faq.getLinks().add(new ItemNivel3("GET", PATH));
		faq.getLinks().add(new ItemNivel3("GET", PATH + "/" + faq.getId()));
		faq.getLinks().add(new ItemNivel3("POST", PATH));
		faq.getLinks().add(new ItemNivel3("PUT", PATH + "/" + faq.getId()));

	}
}
