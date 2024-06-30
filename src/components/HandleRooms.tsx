import React, { FormEvent, useState } from "react";

interface HandleRoomsProps {
  id: number;
  isReserved: boolean;
  currentOccupant: string | null;
  checkInDate: string | null;
  checkOutDate: string | null;
}

const HandleRooms: React.FC<HandleRoomsProps> = ({
  id,
  isReserved,
  currentOccupant,
  checkInDate,
  checkOutDate,
}) => {
  const [editRoom, setEditRoom] = useState(false);
  const [editReservation, setEditReservation] = useState(false);

  const handleCheckIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const currentOccupant = formData.get("currentOccupant") as string;
    const checkInDate = formData.get("checkInDate") as string;
    const checkOutDate = formData.get("checkOutDate") as string;

    fetch(`/api/hotelRooms/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        currentOccupant,
        checkInDate,
        checkOutDate,
        isReserved: true,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Check-in successful!");
        // If I had more time I would probably try to figure out how to refresh the data
      })
      .catch(() => {
        alert("Error checking in.");
      });
  };

  const handleDelete = () => {
    // Assuming that setting `isReserved` to false effectively deletes the reservation
    fetch(`/api/hotelRooms/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        currentOccupant: null,
        checkInDate: null,
        checkOutDate: null,
        isReserved: false,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Reservation canceled successfully!");
      })
      .catch(() => {
        alert("Error canceling reservation.");
      });
  };

  const handleEdit = () => {
    setEditRoom(!editRoom);
  };

  const handleReservation = () => {
    setEditReservation(!editReservation);
  };

  return (
    <>
      {isReserved ? (
        <>
          {!editReservation ? (
            <>
              <div className="flex gap-[2vh]">
                <h1>Current Occupant: {currentOccupant}</h1>
                <h1>Check In Date: {checkInDate}</h1>
                <h1>Check Out Date: {checkOutDate}</h1>
              </div>
              <button className="bg-orange-500" onClick={() => handleReservation()}>EDIT RESERVATION</button>
            </>
          ) : (
            <>
              <form className="text-black" onSubmit={handleCheckIn}>
                <input
                  name="currentOccupant"
                  type="text"
                  placeholder="Occupant Name"
                  defaultValue={currentOccupant || ""}
                  required
                />
                <input
                  name="checkInDate"
                  type="date"
                  defaultValue={checkInDate || ""}
                  required
                />
                <input
                  name="checkOutDate"
                  type="date"
                  defaultValue={checkOutDate || ""}
                  required
                />
                <button className="text-green-500" type="submit">
                  Update Reservation
                </button>
                <button
                  className="text-red-500"
                  type="button"
                  onClick={handleDelete}
                >
                  Cancel Reservation
                </button>
              </form>
            </>
          )}
          
        </>
      ) : (
        <>
        <form className="text-black" onSubmit={handleCheckIn}>
          <input
            name="currentOccupant"
            type="text"
            placeholder="Occupant Name"
            required
          />
          <input name="checkInDate" type="date" required />
          <input name="checkOutDate" type="date" required />
          <button className="text-white" type="submit">
            Save Changes
          </button>
        </form>
        {/* If I had more time I would implement the edit room functionality */}
        </>
      )}
    </>
  );
};

export default HandleRooms;
