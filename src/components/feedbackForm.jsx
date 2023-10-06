import { useState } from 'react';
import '../assets/styles.css';
import * as Form from '@radix-ui/react-form';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    inquiry: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("NAME: "+ feedback.name+ "\nEMAIL: "+ feedback.email+ "\nINQUIRY: "+ feedback.inquiry);
  };
  return (
    <Form.Root className="FormRoot" onSubmit={handleSubmit}>
    <Form.Field className="FormField" name="name">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Name</Form.Label>
      </div>
      <Form.Control asChild>
        <input className="Textarea" 
           type="text"
           id="name"
           name="name"
           value={feedback.name}
           onChange={handleInputChange}
         />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Email*</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Missing email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Invalid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Textarea" 
           type="email"
           id="email"
           name="email"
           value={feedback.email}
           onChange={handleInputChange}
           required
         />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="question">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Question*</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Missing question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" 
        cols={46}
        rows={6}
        id="inquiry"
        name="inquiry"
        value={feedback.inquiry}
        onChange={handleInputChange}
        required 
        />
      </Form.Control>
    </Form.Field>
    <br/>
    <Form.Submit asChild>
      <button className="Button" type='submit'>
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
  );
}
