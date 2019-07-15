package linkedHashMap;

public class LinkedList {

	Node head;

	static class Node {
		String key;
		String value;
		Node next;
		Node(String k, String v) {
			this.key = k;
			this.value = v;
		}
	}
	
	 public LinkedList insert(LinkedList list, String key, String value) 
	    { 
	        Node newNode = new Node(key, value); 
	        newNode.next = null; 

	        if (list.head == null) { 
	            list.head = newNode; 
	        } 
	        else {
	            Node last = list.head; 
	            while (last.next != null) { 
	                last = last.next; 
	            } 
	            last.next = newNode; 
	        } 
	        return list; 
	    }

	public String getValue(LinkedList targetBucket, String key) {
		Node n = targetBucket.head;
		if (key.equals(n.key)) {
			return n.value;
		}
		
		while (n.next != null) {
			n = n.next;
			if (key.equals(n.key)) {
				return n.value;
			}
		}
		
		return null;
	} 
}
