import { Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch, RootState } from "../../Hooks/store";

export const EditNote = () => {
  const availableFonts = [
    "'Nunito Sans', sans-serif",
    "'Fuzzy Bubbles', cursive",
    "'Lora', serif",
    "'PT Sans', sans-serif",
    "'Fasthand', cursive",
    "'Fuzzy Bubbles', cursive",
  ];
  const dispatch = useDispatch<AppDispatch>();
  const {
    fontFamily,
    pinned,
    header,
    content,
    backgroundColor,
    saveStatus,
    tags,
    tagHolder,
    noteId,
    createDate,
    updateDate,
  } = useSelector((store: RootState) => store.noteReducer);
  return (
    <div className="new-note-body">
      <div className="new-note-container">
        <Form>
          <h1>New note</h1>
          <Form.Group className="mb-3">
            <Form.Label>Select font-family</Form.Label>
            <Form.Select
              onChange={(e) =>
                dispatch(noteActions.setFontHandler(e.target.value))
              }
              value={fontFamily}
            >
              {availableFonts.map((font, id) => {
                return <option key={id}>{font}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={header}
              style={{ fontFamily: fontFamily }}
              onChange={(e) =>
                dispatch(noteActions.setTitleHandler(e.target.value))
              }
            />
            <Form.Text className="text-muted">
              Title should be atleast 10 characters long.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Enter content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter description"
              value={content}
              style={{ fontFamily: fontFamily }}
              onChange={(e) =>
                dispatch(noteActions.setContentHandler(e.target.value))
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label> Text box Color : </Form.Label>
            <Form.Control
              type="color"
              placeholder="text-box-color"
              value={backgroundColor}
              onChange={(e) =>
                dispatch(noteActions.setColorHandler(e.target.value))
              }
            />

            <Form.Label>
              {" "}
              Use light color for better visibility. :{`${`)`}`}
            </Form.Label>
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
                  checked={pinned === true}
                  onChange={(e) =>
                    dispatch(
                      noteActions.setPinnedHandler({ checkedValue: true })
                    )
                  }
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  id={`default-radio`}
                  label="Nah"
                  name="pin-note"
                  checked={pinned === false}
                  onChange={(e) =>
                    dispatch(
                      noteActions.setPinnedHandler({ checkedValue: false })
                    )
                  }
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label> Tags : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tags"
              value={tagHolder}
              onChange={(e) =>
                dispatch(noteActions.setTaggedHandler(e.target.value))
              }
            />
            <Form.Text className="text-muted">
              Add keywords separated by spaces
            </Form.Text>
          </Form.Group>
        </Form>
        {saveStatus === "pending" ? (
          <button className="dashboard-button">
            Saving...
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </button>
        ) : (
          <button className="dashboard-button">
            <div>Save note</div>
          </button>
        )}
      </div>
    </div>
  );
};
