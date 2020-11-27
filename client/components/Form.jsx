import React from 'react'


class Form extends React.Component {

  render () {
    return (
      <div>
        <form className='form'>

          <label className='btn' htmlFor="sign">Sign: </label>
          <input className='input' name="sign" type="text"/>
          <br/>

          <label className='btn' htmlFor="sign">Sign: </label>
          <input className='input' name="sign" type="text"/>
          <br/>



          {/* <select onChange={this.handleChange} className='input' value={this.state.sign} name="sign" type="text" >
            <option value="">Select</option>
            <option value="Aries">Aries</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Pisces">Pisces</option>
            <option value="Gemini">Gemini</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Virgo">Virgo</option>
            <option value="Taurus">Taurus</option>
            <option value="Libra">Libra</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Aquarius">Aquarius</option>
          </select> */}

          <button className='text-btn' type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default Form
