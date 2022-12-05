import "./NewNote.css";
import Form from "react-bootstrap/Form";
export const NewNoteForm = () => {
  return (
    <div className="new-note-body">
      <div className="new-note-container">
        <Form>
          <h1>New note</h1>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
            <Form.Text className="text-muted">Atleast 10 char long.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter content</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select font-family</Form.Label>
            <Form.Select>
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Text box Color</Form.Label>
            <Form.Control type="color" placeholder="text-box-color" />
          </Form.Group>
          <Form.Group>
            <Form.Label> Pin note ?</Form.Label>
            <div key={`default-radio`} className="mb-3">
              <Form.Check
                type="radio"
                id={`default-radio`}
                label="Yups"
                name="pin-note"
              />
              <Form.Check
                type="radio"
                id={`default-radio`}
                label="Nah"
                name="pin-note"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Tags : </Form.Label>
            <Form.Control type="text" placeholder="Enter tags" />
            <Form.Text className="text-muted">
              Add tags seperated by spaces
            </Form.Text>
          </Form.Group>
          <div className="dashboard-button">
            <div>Save note</div>
          </div>
        </Form>
      </div>
    </div>
  );
};
