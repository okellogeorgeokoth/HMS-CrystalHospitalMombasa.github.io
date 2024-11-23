import { useState } from 'react';

export default function QueueManagement() {
  // State to store the list of people in the queue
  const [queue, setQueue] = useState([]);
  const [newQueueItem, setNewQueueItem] = useState("");

  // Handle adding a new person to the queue
  const addToQueue = () => {
    if (newQueueItem.trim()) {
      setQueue([...queue, newQueueItem]);
      setNewQueueItem("");
    }
  };

  // Handle removing a person from the queue
  const removeFromQueue = (index) => {
    setQueue(queue.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Queue Management</h1>

      {/* Input section to add a new queue item */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Add New Patient/Task</label>
        <input
          type="text"
          value={newQueueItem}
          onChange={(e) => setNewQueueItem(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Enter Name or Task"
        />
        <button
          onClick={addToQueue}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Queue
        </button>
      </div>

      {/* Queue List */}
      {queue.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">Current Queue</h3>
          <ul className="space-y-2">
            {queue.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded"
              >
                <span>{item}</span>
                <button
                  onClick={() => removeFromQueue(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No one in the queue yet.</p>
      )}
    </div>
  );
}
