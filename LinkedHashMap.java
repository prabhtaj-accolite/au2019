package linkedHashMap;

import linkedHashMap.LinkedList;
//import linkedHashMap.LinkedList.Node;	
import linkedHashMap.Helper;

public class LinkedHashMap {

	private String[] insertionArray;

	private LinkedList[] addressSpace;
	
	private int currentIndex;
	
	private int keyToBucketsRatio = 4;
	
	LinkedHashMap() {
		this.insertionArray = new String[20];
		this.addressSpace = new LinkedList[20];
		this.currentIndex = 0;
	}
	
	LinkedHashMap(int size) {
		this.insertionArray = new String[size];
		this.addressSpace = new LinkedList[size * this.keyToBucketsRatio];
		this.currentIndex = 0;
	}

	public void put(String key, String value) {
		this.insertionArray[this.currentIndex] = key;
		int targetIndex = key.hashCode() % this.addressSpace.length;
		LinkedList targetBucket = this.addressSpace[targetIndex];
		if (targetBucket == null || targetBucket.head == null) {
			targetBucket = new LinkedList();
		}
		targetBucket.insert(targetBucket, key, value);
		this.currentIndex += 1;
		this.addressSpace[targetIndex] = targetBucket;
	}

	public void deleteKey(String n) {
		int index = Helper.findIndex(this.insertionArray, n);
		if(index == -1)
			return;
		
		for (int i = index + 1; i < this.insertionArray.length; i++) {
			this.insertionArray[i - 1] = this.insertionArray[i];
		}
		this.currentIndex -= 1;
	}
	
	public String get(String key) {
		LinkedList targetBucket = this.addressSpace[key.hashCode() % this.addressSpace.length];
		if (targetBucket == null || targetBucket.head == null) {
			System.out.println("*******No value for given Key*******");
			return null;
		}
		String result = targetBucket.getValue(targetBucket, key);
		if (result == null)
			System.out.println("*******No value for given Key*******");
		return result;
	}
	
	public void display() {
		String key;
		String value;
		for (int i = 0; i < this.currentIndex; i++) {
			key = this.insertionArray[i];
			value = get(key);
			System.out.println("Key: " + key + "; Value: " + value);
		}
	}
}
