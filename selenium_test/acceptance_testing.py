import unittest
import time
from selenium import webdriver

BASE_URL = 'http://localhost:3000'

# """
# Clase para el test case del catalogo
# Links:
# - unittest with selenium: https://www.yuma.sk/selenium-python-testing
# - selenium with chromedriver: https://m.youtube.com/watch?v=Xjv1sY630Uc
# """
# class CatalogoTestCase(unittest.TestCase):
#     # Esta funcion se ejecuta primero SIEMPRE
#     def setUp(self):
#         self.correct_pet_names = ['Empanada', 'Luna', 'Peluso', 'Cenicienta', 'Teito']
#         self.driver = webdriver.Chrome("./chromedriver.exe")
#         self.driver.maximize_window()
#         self.close_time = 5
    
#     # Funcion que nos permite testear el catalogo con las opciones Edad: Cachorro, Tipo: Gato
#     def test_catalog(self):
#          # Nos vamos a BASE_URL
#         self._go_to_react_app()
#         # Nos vamos a la pagina Adoptar
#         self.driver.find_element_by_xpath('//*[@id="root"]/div/nav/div/ul/li[3]/a').click()
#         time.sleep(1)
#         # Seleccionamos 'Cachorro' en las opciones de edad
#         self._click_select_option_by_xpath('edad', 'Cachorro')
#         time.sleep(1)
#         # Seleccionamos 'Gato' en las opciones de tipo
#         self._click_select_option_by_xpath('tipo', 'Gato')
#         time.sleep(1)
#         # Le doy click al primero que aparece
#         filtered_pets_html = self.driver.find_elements_by_xpath('//*[@id="elige-mascota"]/div[2]/div/div/div/div/div/div/div/div[2]/h3/span')
#         filtered_pets_names = []
#         for elem in filtered_pets_html:
#             filtered_pets_names.append(elem.get_attribute('innerHTML'))
        
#         print("Obtenidos de la pagina:\n", filtered_pets_names)
#         print("Esperados:\n", self.correct_pet_names)
#         # Realizamos el unit test
#         assert filtered_pets_names == self.correct_pet_names
        
        
#     def _go_to_react_app(self):
#         self.driver.get(BASE_URL)
#         time.sleep(1)

#     def _get_select_xpath(self, name, option):
#         return "//select[@name='" + name + "']/option[text()='" + option + "']"

#     def _click_select_option_by_xpath(self, name, option):
#         self.driver.find_element_by_xpath(self._get_select_xpath(name, option)).click()

#     # the 'tearDown' method will be executed after every 'test' method is completed.
#     def tearDown(self):
#         print("Una vez terminado la navegación y testing, se esperan %d segundos para cerrar el driver..."%(self.close_time))
#         time.sleep(self.close_time)
#         self.driver.close()
    
# """
# Clase para el test case de navegacion de usuario
# """
# INICIO_PAGE_INDEX = 1
# QUIENESSOMOS_PAGE_INDEX = 2
# ADOPTAR_PAGE_INDEX = 3
# class NavigationTestCase(unittest.TestCase):
#     # Esta funcion se ejecuta primero SIEMPRE
#     def setUp(self):
#         self.driver = webdriver.Chrome("./chromedriver.exe")
#         self.driver.maximize_window()
#         self.close_time = 5
    
#     def test_navigation(self):
#         # Nos vamos a BASE_URL (por default, llegamos a la pagina de inicio)
#         self._go_to_react_app()
#         # Scrolleo toda la pagina
#         self._scroll_to_page_bottom()
#         # Scrolleo para el top de la pagina
#         self._scroll_to_page_top()

#         # Voy a la pagina Quienes Somos
#         self._go_to_nav_page(QUIENESSOMOS_PAGE_INDEX)
#         # Scrolleo toda la pagina
#         self._scroll_to_page_bottom()
#         # Scrolleo para el top de la pagina
#         self._scroll_to_page_top()

#         # Voy a la pagina Adoptar
#         self._go_to_nav_page(ADOPTAR_PAGE_INDEX)
#         # Scrolleo toda la pagina
#         self._scroll_to_page_bottom()
#         # Scrolleo para el top de la pagina
#         self._scroll_to_page_top()

#         # Voy a la pagina Donar
#         self.driver.find_element_by_xpath('//*[@id="root"]/div/nav/div/ul/div/div/a/button').click()
#         time.sleep(1)
#         # Scrolleo toda la pagina
#         self._scroll_to_page_bottom()
#         # Scrolleo para el top de la pagina
#         self._scroll_to_page_top()

#         assert True


#     def _go_to_nav_page(self, page_index):
#         self.driver.find_element_by_xpath('//*[@id="root"]/div/nav/div/ul/li[%d]/a'%(page_index)).click()
#         time.sleep(1)

#     def _scroll_to_page_bottom(self):
#         self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
#         time.sleep(2)

#     def _scroll_to_page_top(self):
#         self.driver.execute_script("window.scrollTo(document.body.scrollHeight, 0);")
#         time.sleep(2)

#     def _go_to_react_app(self):
#         self.driver.get(BASE_URL)
#         time.sleep(1)

#     def tearDown(self):
#         print("Una vez terminado la navegación y testing, se esperan %d segundos para cerrar el driver..."%(self.close_time))
#         time.sleep(self.close_time)
#         self.driver.close()

"""
Clase para el test case de formulario
"""
class FormTestCase(unittest.TestCase):
    # Esta funcion se ejecuta primero SIEMPRE
    def setUp(self):
        self.driver = webdriver.Chrome("./chromedriver.exe")
        self.driver.maximize_window()
        self.close_time = 5

    def test_form(self):
        # Nos vamos a BASE_URL (por default, llegamos a la pagina de inicio)
        self._go_to_react_app()
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
        self.driver.find_element_by_xpath('//*[@id="elige-mascota"]/div[2]/div/div/div/div/div[1]').click()
        time.sleep(1)
        # Le doy click para que me lleve al formulario
        self.driver.find_element_by_xpath('//*[@id="elige-mascota"]/div[3]/div/div/div[2]/div[6]/a/button').click()
        # Scrolleo para el top
        self.driver.execute_script("window.scrollTo(document.body.scrollHeight, 0);")
        time.sleep(2)

        # Llenar formulario pt.1
        self.fill_input('//*[@id="firstName"]', 'Erick Josue')
        self.fill_input('//*[@id="lastName"]', 'Pulla Zambrano')
        self.driver.find_element_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[3]/div').click()
        self.driver.find_element_by_xpath('//*[@id="menu-estadoCivil"]/div[3]/ul/li[2]').click()
        self.fill_input('//*[@id="phone"]', '042871625')
        self.fill_input('//*[@id="state"]', 'Guayas')
        self.fill_input('//*[@id="mobile"]', "0991621624")
        self.fill_input('//*[@id="city"]', "Guayaquil")
        self.fill_input('//*[@id="country"]', "Ecuador")
        self.fill_input('//*[@id="address"]', 'Sauces 3')
        self.fill_input('//*[@id="email"]', 'epulla@espol.edu.ec')
        self.driver.find_element_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[12]/div').click()
        self.driver.find_element_by_xpath('//*[@id="menu-referencia"]/div[3]/ul/li[3]').click()
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[3]/button') # Next page

        # Llenar formulario pt.2
        self.fill_input('//*[@id="filled-number"]', '3')
        self.fill_input('//*[@id="filled-number-adults"]', '4')
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[3]/div')
        self._click_by_xpath('//*[@id="menu-tipoVivienda"]/div[3]/ul/li[1]')
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[4]/div')
        self._click_by_xpath('//*[@id="menu-isAlquilada"]/div[3]/ul/li[1]')
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[6]/div')
        self._click_by_xpath('//*[@id="menu-isDeAcuerdo"]/div[3]/ul/li[2]')
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[7]/div')
        self._click_by_xpath('//*[@id="menu-isAlergica"]/div[3]/ul/li[2]')
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[2]/div[8]/div')
        self._click_by_xpath('//*[@id="menu-isCompromisoEsterilizacion"]/div[3]/ul/li[3]')
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[3]/button[2]') # Next page

        # Confirmar formlario
        self._scroll_to_page_down()
        self._click_by_xpath('//*[@id="root"]/div/main/div/div[3]/button[2]')

        assert True

    def _click_by_xpath(self, xpath):
        self.driver.find_element_by_xpath(xpath).click()

    def fill_input(self, xpath, data):
        self.driver.find_element_by_xpath(xpath).send_keys(data)

    def _click_select_option_by_xpath(self, name, option):
        self.driver.find_element_by_xpath(self._get_select_xpath(name, option)).click()

    def _scroll_to_page_down(self):
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight / 2);")
        time.sleep(2)

    def _get_select_xpath(self, name, option):
        return "//select[@name='" + name + "']/option[text()='" + option + "']"

    def _go_to_react_app(self):
        self.driver.get(BASE_URL)
        time.sleep(1)

    def tearDown(self):
        print("Una vez terminado la navegación y testing, se esperan %d segundos para cerrar el driver..."%(self.close_time))
        time.sleep(self.close_time)
        self.driver.close()

# Ejecutamos el programa con el siguiente comando:
# > python acceptance_testing.py
if __name__ == "__main__":
    unittest.main()
