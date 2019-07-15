package com.accolite.au2019.java;

import java.io.FileWriter;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface Servlet {
	String name();
	String url();
}

@Servlet(name = "BasicServlet", url = "basicServlet")
public class CustomAnnotation {

	public CustomAnnotation() {
		Servlet myServlet = this.getClass().getAnnotation(Servlet.class);
        System.out.println(myServlet.name());
		System.out.println(myServlet.url());
		System.out.println(this.getClass().getSimpleName());

		try {
			FileWriter fileWriter = new FileWriter("C:\\Users\\prabhtaj.singh\\Documents\\servlet.xml");
			fileWriter.write("<servlet>\n");
			fileWriter.write("\t<servletname>" + myServlet.name() + "</servletname>\n");
			fileWriter.write("\t<url>" + myServlet.url() + "</url>\n");
			fileWriter.write("\t<class>" + this.getClass().getSimpleName() + "</class>\n");
			fileWriter.write("</servlet>\n");
			fileWriter.close();
		} catch (Exception e) {
			System.out.println(e);
		}

	}

	public static void main(String args[]) {
		CustomAnnotation customAnnotationObj = new CustomAnnotation();

	}

}

