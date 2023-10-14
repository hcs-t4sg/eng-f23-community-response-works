import { useState } from 'react';
import '../assets/styles.css';
import * as Form from '@radix-ui/react-form';
import PropTypes from 'prop-types'



export default function FormContent(props) {
  const [feedback, setFeedback] = useState({
    user: props.user,
    inquiry: '',
    type: props.formType,
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
    alert("USER: "+ feedback.user+ "\nINQUIRY: "+ feedback.inquiry + "\nTYPE: "+ feedback.type);
  };
  return (
    <div> 
      <h3>{props.formType}</h3>
    <Form.Root className="FormRoot" onSubmit={handleSubmit}>
    <Form.Field className="FormField" name="question">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Message</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Missing message
        </Form.Message>
      </div>
      <Form.Control asChild>
      
        <textarea className="Textarea" 
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
      <button className='Button' type='submit'>
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
</div>
  );
}
FormContent.propTypes = {
  formType: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};