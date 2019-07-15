package linkedHashMap;
import java.util.stream.IntStream; 

public class Helper {

	public static<T> int findIndex(T[] a, T target){
		return IntStream.range(0, a.length)
						.filter(i -> target.equals(a[i]))
						.findFirst()
						.orElse(-1);	// return -1 if target is not found
	}
}
