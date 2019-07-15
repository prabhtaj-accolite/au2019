package linkedHashMap;
import java.beans.XMLEncoder;
import java.io.BufferedOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import linkedHashMap.LinkedHashMap;
public class Main {

	public static void main(String[] args) {
		
		LinkedHashMap linkedHashMap = new LinkedHashMap(10);
		
		linkedHashMap.put("angad", "bhasin");
		linkedHashMap.put("kunal", "juneja");
		linkedHashMap.put("akash", "gupta");
		linkedHashMap.display();
		System.out.println("dsgfkjhasglifgaeldflkjahdlskfhlkasjdhkfljhsljkfglskjzfljsglkjef");
		linkedHashMap.deleteKey("kunal");
		System.out.println(linkedHashMap.get("angad"));;
		linkedHashMap.display();
		
		
		try {
			XMLEncoder x = new XMLEncoder(new BufferedOutputStream(new FileOutputStream("result.xml")));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

}
