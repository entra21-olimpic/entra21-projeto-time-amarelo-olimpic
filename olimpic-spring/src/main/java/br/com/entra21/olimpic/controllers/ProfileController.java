package br.com.entra21.olimpic.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.Part;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.entra21.olimpic.model.ItemNivel3;
import br.com.entra21.olimpic.model.Profile;
import br.com.entra21.olimpic.repository.IProfileRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/profile")

public class ProfileController {

	@Autowired
	private IProfileRepository profileRepository;

	@GetMapping()
	@ResponseStatus(HttpStatus.OK)
	public List<Profile> listar() {

		List<Profile> response = profileRepository.findAll();

		response.forEach(profile -> {

			setMaturidadeNivel3(profile);

		});

		return response;

	}

	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public List<Profile> buscar(@PathVariable("id") int param) {

		List<Profile> response = profileRepository.findById(param).stream().toList();

		return response;

	}
	
	@GetMapping("/name/{name}")
	public List<Profile> listName(@PathVariable("name") String name){
		return profileRepository.findByNameStartingWith(name);
	}
	
	
	@GetMapping("/maiorigual/{age}")
		public List<Profile> maiorIgual(@PathVariable("age")Integer age){
			return profileRepository.findByAgeGreaterThanEqual(age);
		}
	
	@GetMapping("/igual/{age}")
	public List<Profile> igual(@PathVariable("age")Integer age){
		return profileRepository.findByAgeEquals(age);
	}
	
	@GetMapping("/email/{email}")
	public List<Profile> contemEmail(@PathVariable("email")String email){
		return profileRepository.findByEmailContaining(email); 
	}
	
	@GetMapping("/password")
		public String senhasComuns(){
		return profileRepository.commonsPasswords(); 
	}
	

	@PostMapping()

	@ResponseStatus(HttpStatus.CREATED)

	public @ResponseBody Profile adicionar(@RequestBody Profile novoProfile) {
		return profileRepository.save(novoProfile);
	}
	
	@PostMapping("/login")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public @ResponseBody Profile login(@RequestBody Profile credentials) {
		
		List<Profile> response = profileRepository.findAll().stream().toList();
		
		for(Profile profile : response) {
			if(credentials.getEmail().equals(profile.getEmail()) && credentials.getPassword().equals(profile.getPassword())) {
				return profile;
			}
		}
		
		return null;
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody Optional<Profile> atualizar(@PathVariable("id") int param,
			@RequestBody Profile profileAtualizado) {

		Profile atualizado = profileRepository.findById(param).get();
		atualizado.setName(profileAtualizado.getName());
		atualizado.setLast_name(profileAtualizado.getLast_name());
		atualizado.setAge(profileAtualizado.getAge());
		atualizado.setTelephone(profileAtualizado.getTelephone());
		atualizado.setAddress(profileAtualizado.getAddress());
		atualizado.setGraduation(profileAtualizado.getGraduation());
		atualizado.setEmail(profileAtualizado.getEmail());
		atualizado.setPassword(profileAtualizado.getPassword());
		atualizado.setAbout(profileAtualizado.getAbout());
		atualizado.setImage(profileAtualizado.getImage());

		profileRepository.save(atualizado);

		return profileRepository.findById(param);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public @ResponseBody boolean deletar(@PathVariable("id") int param) {
		profileRepository.deleteById(param);
		return !profileRepository.existsById(param);
	}

	
	private void setMaturidadeNivel3(Profile profile) {

		final String PATH = "localhost:8080/profile";

		ArrayList<String> headers = new ArrayList<String>();

		headers.add("Accept:application/json");
		headers.add("Content-type:application/json");

		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);

		try {

			Profile clone = mapper.readValue(mapper.writeValueAsString(profile), Profile.class);
			clone.setLinks(null);
			String nomeAtual = clone.getName();
			clone.setName("Nome diferente");
			String jsonUpdate = mapper.writeValueAsString(clone);
			clone.setName(nomeAtual);
			clone.setId(null);
			String jsonCreate = mapper.writeValueAsString(clone);

			profile.setLinks(new ArrayList<>());

			profile.getLinks().add(new ItemNivel3("GET", PATH, null, null));
			profile.getLinks().add(new ItemNivel3("GET", PATH + "/" + profile.getId(), null, null));
			profile.getLinks().add(new ItemNivel3("POST", PATH, headers, jsonCreate));
			profile.getLinks().add(new ItemNivel3("PUT", PATH + "/" + profile.getId(), headers, jsonUpdate));

		} catch (JsonProcessingException e) {

			e.printStackTrace();

		}

	}
}