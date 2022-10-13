package br.com.entra21.olimpic.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.entra21.olimpic.model.Pratice;

public interface IPraticeRepository extends JpaRepository<Pratice, Integer> {

	@Query(nativeQuery = true,
			value = "select profile.name, pratice.date_pratice, pratice.duration from profile join pratice on profile.id = pratice.profile_id order by pratice.id")
	public ArrayList<Object> getPratice();
}
