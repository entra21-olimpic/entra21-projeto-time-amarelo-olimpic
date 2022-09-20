package br.com.entra21.olimpic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.entra21.olimpic.model.Profile;

public interface IProfileRepository extends JpaRepository<Profile, Integer> {

}
