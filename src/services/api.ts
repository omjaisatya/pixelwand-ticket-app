import { Event } from "../types";

// For development, you can run: json-server --watch src/data/events.json --port 3001
const API_BASE_URL = "http://localhost:3001";

export const eventService = {
  async getEvents(): Promise<Event[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching events:", error);
      // Fallback to local data for demo purposes
      return require("../data/events.json").events;
    }
  },

  async getEventById(id: string): Promise<Event | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch event");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching event:", error);
      const events = require("../data/events.json").events;
      return events.find((event: Event) => event.id === id) || null;
    }
  },
};
