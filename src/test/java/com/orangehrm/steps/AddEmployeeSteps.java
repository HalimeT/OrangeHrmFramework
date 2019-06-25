package com.orangehrm.steps;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.orangehrm.pages.AddEmployeePage;
import com.orangehrm.pages.HomePage;
import com.orangehrm.pages.LoginPage;
import com.orangehrm.utils.CommonMethods;
import com.orangehrm.utils.ConfigsReader;
import com.orangehrm.utils.Constants;
import com.orangehrm.utils.ExcelUtility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
public class AddEmployeeSteps  extends CommonMethods{
   public static LoginPage login;
   public static HomePage home;
   public static AddEmployeePage addEmp;
   
   @Given("I logged in into OrangeHrm")
	public void i_logged_in_into_OrangeHrm() {
		login=new LoginPage();
		home = new HomePage();
		addEmp = new AddEmployeePage();
		login.login(ConfigsReader.getProperty("username"), ConfigsReader.getProperty("password"));
	}
   
@Given("I click on PIM link")
public void i_click_on_PIM_link() {
	home =new HomePage();
	click(home.PIM);
	}

@Given("I click on add Employee link")
public void i_click_on_add_Employee_link() {
	click(home.addEmployee);   
}
	@When("I provide Employee details {string} and {string} and {string} and {string}")
	public void i_provide_Employee_details_and_and_and(String fName, String midName, String lName, String location) {	
	addEmp=new AddEmployeePage();
	sendText(addEmp.firstName,fName);
	sendText(addEmp.middleName,midName);
	sendText(addEmp.lastName,lName);
	click(addEmp.location);
	selectList(addEmp.locationList,location);	
}

@When("I click on save button")
public void i_click_on_save_button() {
	click(addEmp.saveBtn);
   }

@Then("I see employee is added succesfully {string} and {string}")
public void i_see_employee_is_added_succesfully_and(String fName, String lName) {
	waitForElementBeClickable(addEmp.empCheck, 20);
	String text=addEmp.empCheck.getText();
	System.out.println(text);
    Assert.assertEquals(text,fName+" "+lName);
	
}@Then("I see following labels")
public void i_see_following_labels(DataTable addEmpLabels) {

	List<String> expectedLabels = addEmpLabels.asList();
	System.out.println("----Printing labels from cucumber dataTable----");
	for (String label:expectedLabels) {
		System.out.println(label);
	}
	//create an empty arraylist where we store labels
	List<String> actualLabels=new ArrayList<String>();
	
//get all label elements
	System.out.println("----Printing labels text from the application----");
	
	List<WebElement> labelList=addEmp.addEmpLabels;
	for (WebElement label: labelList) {
		String labeltxt=label.getText();
		
		if(!labeltxt.isEmpty()) {
			actualLabels.add(labeltxt.replace("*", ""));
		}
	} 
	Assert.assertTrue(actualLabels.equals(expectedLabels));
       
       
       
       
}


		
@When("I provide firstname,midname,lastname and location from excelFile")
public void i_provide_firstname_midlename_lastname_and_location() throws InterruptedException {
	ExcelUtility excel=new ExcelUtility();
	excel.openExcel(Constants.xlPath_addEmployee, "Sheet1");
	int rows=excel.getRowNum();
	int cols=excel.getColNum(0);
	for(int i=1; i<rows; i++) {
		home =new HomePage();
		
		for(int j=0; j<cols; j++) {
			String username=excel.getCellData(i,j);
			sendText(addEmp.firstName, username);
		    String password=excel.getCellData(i,++j);
			sendText(addEmp.middleName, password);
		    String lastname=excel.getCellData(i,++j);
			sendText(addEmp.lastName, lastname);
			String location=excel.getCellData(i,++j);
			
			click(addEmp.location);
			waitForElementBeVisible(addEmp.locationList, 20);
			selectList(addEmp.locationList,location);
			click(addEmp.saveBtn);
		
  		     Thread.sleep(3000);
			}
		
		click(home.addEmployee);
		
	}
   
}

@When("I click on create login details")
public void i_click_on_create_login_details() {
   
}

@When("I provide all mandatory fields")
public void i_provide_all_mandatory_fields() {
   
}

@Then("I see employee is added successfully")
public void i_see_employee_is_added_successfully() {
    
}

}