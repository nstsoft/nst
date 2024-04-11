import './index.scss';
import { Input, Button } from 'antd';
import { faUpwork, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import axios from 'axios';

export function ContactUs() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [showForm, setShowForm] = useState(true);

  const onSubmit = () => {
    const data = {
      'entry.1678961923': name,
      'entry.1764846499': lastName,
      'entry.1578438204': email,
      'entry.107176989': text,
    };
    setName('');
    setLastName('');
    setEmail('');
    setText('');
    setShowForm(false);
    axios({
      data,
      method: 'POST',
      url: import.meta.env.VITE_GOOGLE_FORM,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).catch(console.log);
  };

  const renderForm = () => (
    <div className="form">
      <div className="form-item duplex">
        <Input placeholder="Name" value={name} onChange={(ev) => setName(ev.target.value)} />
        <Input placeholder="Last Name" value={lastName} onChange={(ev) => setLastName(ev.target.value)} />
      </div>
      <div className="form-item">
        <Input type="email" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
      </div>
      <div className="form-item text">
        <Input
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          placeholder="Please tell us a bit  about your goals, what are you hoping  to  achieve with NSTsoft"
        />
      </div>
      <div className="form-item ">
        <Button className="submit" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );

  return (
    <section>
      <div className="ContactUs" id="contact-us">
        <div className="form-container">
          <div className="info">
            <div className="logo">
              <img width={140} src="./assets/transparent_full.png" />
            </div>
            <div className="text">
              A software product development company located in Ukraine, with wide range of technology solutions.
            </div>
            <div className="email">Contact email: info@nstsoft.com</div>
            <div className="social">
              <FontAwesomeIcon className="icon" icon={faUpwork} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </div>
          </div>
          {showForm ? renderForm() : <div className="reply">Thanks for Your reply</div>}
        </div>
      </div>
    </section>
  );
}
