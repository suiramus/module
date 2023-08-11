
/* 
	Modal JS
	
	HTML:
	<a href="#modalW" class="modal-link">Open Modal 2</a>
	<div id="modalW" class="modal">
		<div class="modal-content">
			<h2>Modal 2</h2>
			<p>This is the content of Modal 2.</p>
		</div><!-- .modal-content -->
	</div><!-- .modal -->

	CSS:
	.modal {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		overflow: auto;
	}

	.modal-content {
		position: relative;
		background-color: white;
		margin: 0 auto;
		margin-top: 30px;
		padding: 40px 30px;
		border-radius: 5px;
		max-width: 80%;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
	}

	@media screen and (max-width: 768px) {
		.modal-content { max-width: 90%; padding: 15px; }
	}

	.modal-inner { padding: 40px 20px; }

	.close-button {
		position: absolute;
		display: block; cursor: pointer;
		top: 16px; right: 16px;
		width: 24px; height: 24px;
		border-radius: 50%; padding: 5px;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%23121212" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"%2F%3E%3C%2Fsvg%3E');
		background-size: contain; opacity: .4;
	}

	.close-button:hover { opacity: 1; }
	
*/

document.addEventListener("DOMContentLoaded", function () {
	const modalLinks = document.querySelectorAll(".modal-link");
	const modals = document.querySelectorAll(".modal");
	
	modalLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetModalId = link.getAttribute("href");
			const targetModal = document.querySelector(targetModalId);
			
			if (targetModal) {
				
				targetModal.style.display = "block";
				const closeButton = document.createElement("span");
				closeButton.className = "close-button";
				// closeButton.textContent = "X";
				targetModal.querySelector(".modal-content").appendChild(closeButton);
				
				closeButton.addEventListener("click", function () {
					targetModal.style.display = "none";
					closeButton.remove();
				});
				
				window.addEventListener("click", function (event) {
					if (event.target === targetModal) {
						targetModal.style.display = "none";
						closeButton.remove();
					}
				});
				
			} // if (targetModal)
		});
	}); // modalLinks.forEach
}); // document.addEventListener
