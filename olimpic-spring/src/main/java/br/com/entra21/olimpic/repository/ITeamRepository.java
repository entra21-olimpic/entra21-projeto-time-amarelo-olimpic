package br.com.entra21.olimpic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.entra21.olimpic.model.Team;

public interface ITeamRepository extends JpaRepository<Team, Integer> {

}
