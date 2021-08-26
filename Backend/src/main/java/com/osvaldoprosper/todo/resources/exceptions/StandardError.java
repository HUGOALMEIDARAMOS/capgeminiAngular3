package com.osvaldoprosper.todo.resources.exceptions;

import java.io.Serializable;

public class StandardError implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	private long timestamp;
	private Integer status;
	private String message;
	
	public StandardError() {
		super();	
	}

	public StandardError(long timestamp, Integer status, String message) {
		super();
		this.timestamp = timestamp;
		this.status = status;
		this.message = message;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	
	
}
