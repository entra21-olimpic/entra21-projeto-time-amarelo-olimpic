package br.com.entra21.olimpic.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.entra21.olimpic.model.Pratice;
import br.com.entra21.olimpic.model.Profile;

public interface IPraticeRepository extends JpaRepository<Pratice, Integer> {

	@Query(nativeQuery = true,
			value = "select * from profile join pratice on profile.id = pratice.profile_id;")
	public ArrayList<Profile> getPratice();
}
