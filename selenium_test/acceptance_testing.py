import unittest
import time
from selenium import webdriver

"""
Clase para el test case del catalogo
Links:
- unittest with selenium: https://www.yuma.sk/selenium-python-testing
- selenium with chromedriver: https://m.youtube.com/watch?v=Xjv1sY630Uc
"""
class CatalogoTestCase(unittest.TestCase):
    # Esta funcion se ejecuta primero SIEMPRE
    def setUp(self):
        self.corret_pet_names = ['Empanada', 'Luna', 'Peluso', 'Cenicienta', 'Teito']
        self.driver = webdriver.Chrome("./chromedriver.exe")
        self.driver.maximize_window()
        self.close_time = 5
    
    # Funcion que nos permite testear el catalogo con las opciones Edad: Cachorro, Tipo: Gato
    def test_1_catalog(self):
         # Nos vamos a http://localhost:3000
        self._goToReactApp()
        # Nos vamos a la pagina Adoptar
        self.driver.find_element_by_xpath('//*[@id="root"]/div/nav/div/ul/li[3]/a').click()
        time.sleep(1)
        # Seleccionamos 'Cachorro' en las opciones de edad
        self._click_select_option_by_xpath('edad', 'Cachorro')
        time.sleep(1)
        # Seleccionamos 'Gato' en las opciones de tipo
        self._click_select_option_by_xpath('tipo', 'Gato')
        time.sleep(1)
        # Le doy click al primero que aparece
        filtered_pets_html = self.driver.find_elements_by_xpath('//*[@id="elige-mascota"]/div[2]/div/div/div/div/div/div/div/div[2]/h3/span')
        filtered_pets_names = []
        for elem in filtered_pets_html:
            filtered_pets_names.append(elem.get_attribute('innerHTML'))
        
        print("Obtenidos de la pagina:\n", filtered_pets_names)
        print("Esperados:\n", self.corret_pet_names)
        # Realizamos el unit test
        assert filtered_pets_names == self.corret_pet_names
        
        
    def _goToReactApp(self):
        self.driver.get('http://localhost:3000')
        time.sleep(1)

    def _get_select_xpath(self, name, option):
        return "//select[@name='" + name + "']/option[text()='" + option + "']"

    def _click_select_option_by_xpath(self, name, option):
        self.driver.find_element_by_xpath(self._get_select_xpath(name, option)).click()

    # the 'tearDown' method will be executed after every 'test' method is completed.
    def tearDown(self):
        print("Una vez terminado la navegación y testing, se esperan %d segundos para cerrar el driver..."%(self.close_time))
        time.sleep(self.close_time)
        self.driver.close()
    


# Ejecutamos el programa con el siguiente comando:
# > python acceptance_testing.py
if __name__ == "__main__":
    unittest.main()
