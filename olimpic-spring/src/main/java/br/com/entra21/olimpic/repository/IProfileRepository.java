package br.com.entra21.olimpic.repository;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.entra21.olimpic.model.Profile;

public interface IProfileRepository extends JpaRepository<Profile, Integer> {

	public List<Profile> findByNameStartingWith(String name);
	
	public List<Profile> findByAgeGreaterThanEqual(Integer age);
	
	public List<Profile> findByAgeEquals(Integer age);
	
	public List<Profile> findByEmailContaining(String email);
	
	public List<Profile> countByPassword(String password);
	
	public List<Profile> findByPasswordOrderById(String password);
	
	@Query(nativeQuery = true,
			value = "select password from profile group by password order by password asc limit 1")
	public String commonsPasswords();
}
