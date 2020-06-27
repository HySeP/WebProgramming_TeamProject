package board;

public class Record {
	public static final Record DEFAULT = new Record("없음", 0);
	private String name;
	private int score;
	
	public Record(String name, int score) {
		this.name = name;
		this.score = score;
	}

	public String getName() {
		return name;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public void setName(String name) {
		this.name = name;
	}
}
