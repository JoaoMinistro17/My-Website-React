import '../css/books.css'; 

function Books() {
    const literaturePhilosophyBooks = [
        'LP1.jpg',
        'LP2.jpg',
        'LP3.jpg',
        'LP4.jpg',
        'LP5.jpg',
        'LP6.jpg',
        'LP7.jpg',
        'LP8.jpg',
        'LP9.jpg',
        'LP10.jpg',
      ];
    
      const programmingBooks = [
        'P1.jpg',
        'P2.jpg',
        'P3.jpg',
      ];

    return (
        <div>
          {/* Literature/Philosophy Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 className="book__title">📚 Literature/Philosophy</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {literaturePhilosophyBooks.map((book, index) => (
                <img
                  key={index}
                  src={`${book}`} // Assuming images are in public/img
                  alt={`Literature/Philosophy Book ${index + 1}`}
                  style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }}
                />
              ))}
            </div>
          </div>
    
          {/* Programming Section */}
          <div>
            <h2 className="book__title">💻 Programming</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {programmingBooks.map((book, index) => (
                <img
                  key={index}
                  src={`${book}`} // Assuming images are in public/img
                  alt={`Programming Book ${index + 1}`}
                  style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }}
                />
              ))}
            </div>
          </div>
        </div>
    );
}

export default Books;