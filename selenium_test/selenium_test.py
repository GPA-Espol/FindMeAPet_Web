"""
Archivo para testear Selenium y Chromedriver (no se realiza ninguna testeo a la pagina)
"""

import time
from selenium import webdriver

select_tag_names = ['edad', 'color', 'sexo', 'tipo']
edades = ['Cachorro', 'Juvenil', 'Adulto']
tipo = ['Perro', 'Gato']

def get_select_xpath(name, option):
    return "//select[@name='" + name + "']/option[text()='" + option + "']"
    
def click_select_by_xpath(driver, name, option):
    driver.find_element_by_xpath(get_select_xpath(name, option)).click()
    
driver = webdriver.Chrome("./chromedriver.exe")
driver.maximize_window()
driver.get('http://localhost:3000')
time.sleep(1)
# Nos vamos a la pagina Adoptar
driver.find_element_by_xpath('//*[@id="root"]/div/nav/div/ul/li[3]/a').click()
time.sleep(1)
# Seleccionamos 'Cachorro' en las opciones de edad
click_select_by_xpath(driver, 'edad', 'Cachorro')
time.sleep(1)
# Seleccionamos 'Gato' en las opciones de tipo
click_select_by_xpath(driver, 'tipo', 'Gato')
time.sleep(1)
# Le doy click al primero que aparece
driver.find_element_by_xpath('//*[@id="elige-mascota"]/div[2]/div/div/div/div/div[1]').click()
time.sleep(1)
# Le doy click para que me lleve al formulario
driver.find_element_by_xpath('//*[@id="elige-mascota"]/div[3]/div/div/div[2]/div[6]/a/button').click()

time.sleep(5)
driver.quit()