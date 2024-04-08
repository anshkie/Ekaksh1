# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestUploadpdf():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_uploadpdf(self):
    self.driver.get("http://localhost:3000/")
    self.driver.set_window_size(1552, 832)
    self.driver.find_element(By.LINK_TEXT, "Login").click()
    self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").send_keys("an@gmail.com")
    self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").send_keys("an")
    self.driver.find_element(By.CSS_SELECTOR, ".submit-button").click()
    self.driver.find_element(By.LINK_TEXT, "Upload").click()
    self.driver.find_element(By.LINK_TEXT, "Upload pdf").click()
    self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").send_keys("C:\\fakepath\\MA 202 Assignment 1.pdf")
    self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").send_keys("maths_ass1")
    self.driver.find_element(By.CSS_SELECTOR, ".submit-button").click()
    assert self.driver.switch_to.alert.text == "Pdf Uploaded Successfully"
  
