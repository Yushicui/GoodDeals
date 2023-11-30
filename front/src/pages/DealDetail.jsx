import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DeleteDeal } from "../pages/DeleteDeal";

import "../asset/style/DealDetail.css";

export function DealDetail() {
  const [deal, setDeal] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const { dealId } = useParams();

  useEffect(() => {
    async function fetchDeal() {
      const response = await fetch(`/api/deals/id/${dealId}`);
      if (response.ok) {
        const data = await response.json();
        setDeal(data);
      } else {
        console.error("Deal not found");
      }
    }
    fetchDeal();
    async function fetchComments() {
      const response = await fetch(`/api/deals/id/${dealId}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    }
    fetchComments();
  }, [dealId]);

  if (!deal) {
    return <div>Loading...</div>;
  }

  const submitComment = async () => {
    if (newComment) {
      try {
        const response = await fetch(`/api/deals/id/${dealId}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newComment }),
        });

        if (response.ok) {
          const updatedResponse = await fetch(
            `/api/deals/id/${dealId}/comments`,
          );
          if (updatedResponse.ok) {
            const updatedData = await updatedResponse.json();
            setComments(updatedData);
          }

          setNewComment("");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const deleteComment = async (commentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?",
    );
    if (confirmed) {
      const response = await fetch(`/api/deals/comments/${commentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    }
  };

  const handleLike = async () => {
    if (!liked) {
      const updatedDeal = { ...deal };
      updatedDeal.like += 1;

      try {
        const response = await fetch(`/api/deals/id/${dealId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ like: updatedDeal.like }),
        });

        if (response.ok) {
          alert("Deal liked successfully!");
          setDeal(updatedDeal);
          setLiked(true);
          setLikes(updatedDeal.like);
        } else {
          console.error("Error updating deal");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="card">
        <img src={deal.imagelink} alt={deal.title} className="card-img-top" />
        <div className="card-body">
          <h1 className="card-title">{deal.title}</h1>
          <p className="card-text">{deal.description}</p>

          <div className="card-btn"> //separate it into a component
            <button
              onClick={handleLike}
              disabled={liked}
              className="btn btn-success mx-2"
            >
              Like ({deal.like})
            </button>
            <Link
              to={`/deals/edit/id/${dealId}`}
              className="btn btn-secondary mx-2"
            >
              Edit
            </Link>
            <DeleteDeal dealId={dealId} />
          </div>
          <section className="comment-section">  //separate it into a component
            <h2>Comments</h2>
            {comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.text}</p>
                <button onClick={() => deleteComment(comment._id)}>
                  Delete Comment
                </button>
              </div>
            ))}
            <div className="comment-form">
              <form>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment here"
                  required
                />
                <button onClick={submitComment}>Submit Comment</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

DealDetail.propTypes = {};
