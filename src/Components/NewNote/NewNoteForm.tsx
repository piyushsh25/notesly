import "./NewNote.css";
import Form from "react-bootstrap/Form";
export const NewNoteForm = () => {
  const availableFonts = [
    "'Nunito Sans', sans-serif",
    "'Fuzzy Bubbles', cursive;",
    "'Lora', serif;",
    "'PT Sans', sans-serif;",
    "'Fasthand', cursive;",
    "'Fuzzy Bubbles', cursive;",
  ];
  return (
    <div className="new-note-body">
      <div className="new-note-container">
        <Form>
          <h1>New note</h1>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
            <Form.Text className="text-muted">
              Title should be atleast 10 characters long.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter content</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select font-family</Form.Label>
            <Form.Select>
              {availableFonts.map((font) => {
                return <option>{font}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Text box Color</Form.Label>
            <Form.Control type="color" placeholder="text-box-color" />
          </Form.Group>
          <Form.Group className="pin-note-form-container">
            <Form.Label> Pin note ?</Form.Label>
            <div key={`default-radio`} className="mb-3">
              <div>
                <Form.Check
                  type="radio"
                  id={`default-radio`}
                  label="Yups"
                  name="pin-note"
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  id={`default-radio`}
                  label="Nah"
                  name="pin-note"
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Tags : </Form.Label>
            <Form.Control type="text" placeholder="Enter tags" />
            <Form.Text className="text-muted">
              Add tags seperated by spaces
            </Form.Text>
          </Form.Group>
          <button className="dashboard-button">
            <div>Save note</div>
          </button>
        </Form>
      </div>
    </div>
  );
};
