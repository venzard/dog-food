import React, {useContext, useState} from "react";
import {Row, Col, Form, Button} from "react-bootstrap";
import Ctx from "../../Ctx";

export default ({id,setProduct,setOpen}) => {
    const [rating, setRating] = useState("");
    const [text, setText] = useState("");
    const {api} = useContext(Ctx);
    const handler = (e) => {
        e.preventDefault();
        let body = {
            rating: rating || "Рейтинг",
            text: text || "Описание",
        }
        api.addReview(id,body)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setProduct(data);
                    setOpen(false);
                }
            })
    }

    return <>
        <h2>Добавление отзыва</h2>
        <Form onSubmit={handler}>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Оцените товар от 1 до 5</Form.Label>
                        <Form.Control 
                            type="number" 
                            max={5}
                            min={0}
                            value={rating} 
                            onChange={e => setRating(e.target.value)}
                        />
                    </Form.Group>          
                    <Form.Group className="mb-3">
                        <Form.Label>Добавьте описание</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={4}
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </Form.Group>
                    <Button  className="mb-3" variant={"warning"} type="submit">
                        Добавить отзыв
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
}
