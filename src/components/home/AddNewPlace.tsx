import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, database } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { push, ref } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const AddNewPlace = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [type, setType] = useState<string>("Select Type");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [sector, setSector] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (uid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
    });
  }, []);

  const addNewPlaceHandler = (e) => {
    e.preventDefault();

    const dbRef = ref(database, `data/${type}`);
    const id = uuidv4();
    const sectorsArray = sector.split(",");

    push(dbRef, {
      id,
      name,
      location,
      phone,
      website,
      image,
      email,
      sector: sectorsArray,
    })
      .then((res) => {
        console.log(res);
        resetFormHandler();
      })
      .catch((error) => {
        console.error("Error adding data: " + error.message);
      });
  };

  const resetFormHandler = () => {
    setType("Select Type");
    setName("");
    setLocation("");
    setImage("");
    setPhone("");
    setEmail("");
    setWebsite("");
    setSector("");
  };

  return isAuthenticated ? (
    <form
      onSubmit={(e) => {
        addNewPlaceHandler(e);
      }}
    >
      <label htmlFor="type">Select Place Type</label>
      <select
        id="type"
        className="form-select mb-3"
        aria-label="place-select"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option>Select Type</option>
        <option value="orphanages">Orphanage</option>
        <option value="elderlyCares">Elderly Care</option>
        <option value="animalWelfares">Animal Welfare</option>
        <option value="shelterHomes">Shelter Home</option>
      </select>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-control"
          id="name"
          placeholder="Enter place name here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Add Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          placeholder="Add image URL of the place"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Add Address
        </label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          id="location"
          placeholder="Enter place location here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Add Phone
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="form-control"
          id="phone"
          placeholder="Enter Your Phone Number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="website" className="form-label">
          Add Website URL
        </label>
        <input
          type="text"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
          className="form-control"
          id="website"
          placeholder="Enter Website URL of the place"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Add Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="email"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sector" className="form-label">
          Add Sectors
        </label>
        <input
          type="text"
          value={sector}
          onChange={(e) => {
            setSector(e.target.value);
          }}
          className="form-control"
          id="sector"
          placeholder="Enter Sectors separated with comma"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Add New Place
      </button>
    </form>
  ) : (
    <div>
      <p className="text-muted fw-bold">
        Please login first to add a new place.
      </p>
      <button
        className="btn btn-dark"
        onClick={() => {
          navigate("/login");
        }}
      >
        Go to Login Page
      </button>
    </div>
  );
};

export default AddNewPlace;
