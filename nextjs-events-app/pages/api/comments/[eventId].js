function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { name, email, comment } = req.body;
    console.log(name, email, comment);

    // Add server side validation
    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({
        message: "Error in request body",
      });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      comment,
    };
    res.status(201).json({
      message: "SUCCESS",
      comment: newComment,
    });
    console.log(newComment);
  } else if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "YY",
        comment: "This is my comment yo",
      },
      {
        id: "c2",
        name: "JY",
        comment: "Hey you",
      },
    ];
    res.status(200).json({
      comments: dummyList,
    });
  } else {
    res.status(400).json({
      message: "Unsupported HTTP Method",
    });
  }
}

export default handler;
