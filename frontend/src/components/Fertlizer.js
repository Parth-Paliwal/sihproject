import React, { useState } from 'react';
import './Cropstyle.css';

const CropForm = () => {
  const [formData, setFormData] = useState({
    cropType: 'Wheat',
    temperature: '',
    humidity: '',
    moisture: '',
    soilType: 'black',
    nitrogen: '',
    phosporus: '',
    potassium: '',
  });
const [result , setresult] = useState('');
const [display ,setdiaplay] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleresult= async(soiltype , croptype , N , P , K,T , H ,M)=>{
    const response = await fetch(`http://localhost:8000/fertilizer/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        temperature :T,
        humidity:H,
        moisture : M,
        soilType : soiltype ,
        cropType : croptype ,
        Nitrogen : N ,
        Potassium : K ,
        Phosphorous : P
      }),
    });
    const json = await response.json();
    setresult(json.Fertilizer);
    console.log(json);
  }

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Show modal on form submission
    await handleresult(
      formData.soilType ,
      formData.cropType ,
      formData.nitrogen,
      formData.phosporus,
      formData.potassium,
      formData.temperature,
      formData.humidity,
      formData.moisture,
    )
    // const modal = document.getElementById('confirmationModal');
    // modal.style.display = 'block';
    setdiaplay(true);

  };

  const handleCloseModal = () => {
    // document.getElementById('confirmationModal').style.display = 'none';
    setdiaplay(false);
  };

  return (
    <>
    <div className='fertilizer'>
    <div className="form-container">
    {!display &&  <form className="form" id="crop-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h1 id="crop-form-title">Crop Info</h1>
        </div>

        <div className="form-group">
          <label htmlFor="crop-type" className="form-label">Select your crop type</label>
          <select
            className="form-select"
            id="crop-type"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
          >
            <option value="Wheat">Wheat</option>
            <option value="Maize">Maize</option>
            <option value="Paddy">Paddy</option>
            <option value="Millets">Millets</option>
            <option value="Tobacco">Tobacco</option>
            <option value="Ground Nuts">Ground Nuts</option>
            <option value="Oil Seeds">Oil Seeds</option>
            <option value="Cotton">Cotton</option>
            <option value="Barley">Barley</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Pulses">Pulses</option>
          </select>
        </div>

        <div className="form-group input-group">
          <div className="input-group-item">
            <label htmlFor="temperature" className="form-label">Temperature</label>
            <input
              type="number"
              name="temperature"
              id="temperature"
              value={formData.temperature}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
            />
          </div>

          <div className="input-group-item">
            <label htmlFor="humidity" className="form-label">Humidity</label>
            <input
              type="number"
              name="humidity"
              id="humidity"
              value={formData.humidity}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
            />
          </div>

          <div className="input-group-item">
            <label htmlFor="moisture" className="form-label">Moisture</label>
            <input
              type="number"
              name="moisture"
              id="moisture"
              value={formData.moisture}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="soil-type" className="form-label">Select your soil type</label>
          <select
            className="form-select"
            id="soil-type"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
          >
            <option value="Alluvial">Alluvial</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Laterite">Laterite</option>
            <option value="Desert">Desert</option>
            <option value="Marshy">Marshy</option>
            <option value="Forest">Forest</option>
            <option value="Mountainous">Mountainous</option>
          </select>
        </div>

        <div className="form-group input-group">
          <div className="input-group-item">
            <label htmlFor="nitrogen" className="form-label">Nitrogen</label>
            <input
              type="number"
              name="nitrogen"
              id="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
              min="0"
              required
            />
          </div>

          <div className="input-group-item">
            <label htmlFor="phosporus" className="form-label">Phosporus</label>
            <input
              type="number"
              name="phosporus"
              id="phosporus"
              value={formData.phosporus}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
              min="0"
              required
            />
          </div>

          <div className="input-group-item">
            <label htmlFor="potassium" className="form-label">Potassium</label>
            <input
              type="number"
              name="potassium"
              id="potassium"
              value={formData.potassium}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
              min="0"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>}

      {/* Modal */}
      {display && <div className="modal" id="confirmationModal">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Fertilizer Result </h5>
            {/* <button type="button" className="btn-close" onClick={handleCloseModal}>X</button> */}
          </div>
          <div className="modal-body">
          Fertilizer Name :  <div className='result'>{result}</div> 
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      </div>}
    </div>
    </div>
    </>
  );
};

export default CropForm;
