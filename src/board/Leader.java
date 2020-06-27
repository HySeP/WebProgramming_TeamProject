package board;

import java.util.ArrayList;

public class Leader {
	private static Leader instance = new Leader();
	public ArrayList<Record> highscore;
	
	public static Leader getInstance() {
		return instance;
	}
	
	public Leader() {
		highscore = new ArrayList<>();
		String name = "홍길동";
		int[] preset = {100, 80, 50, 30, 20, 15, 10, 8, 5, 1};
		for(int i=0; i<10; i++) {
			highscore.add(new Record(name, preset[i]));
		}
	}
	
	public void loadFile() {
		
	}

	public void saveFile() {
		
	}
}
