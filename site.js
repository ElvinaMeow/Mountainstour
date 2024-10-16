document.getElementById('review-button-1').addEventListener('click', function (){
    window.open('newpage.html', '_self');
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;

    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'review';
    
    const reviewName = document.createElement('h3');
    reviewName.textContent = name;
    
    const reviewContent = document.createElement('p');
    reviewContent.textContent = reviewText;

    reviewContainer.appendChild(reviewName);
    reviewContainer.appendChild(reviewContent);

    document.querySelector('.reviews').appendChild(reviewContainer);

    // Очистить форму после отправки
    document.getElementById('review-form').reset();     
});