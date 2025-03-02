const db = require('./models'); // Ensure models directory is correct

(async () => {
  try {
    const newRegion = await db.Region.create({
      name: 'Asia' // Add a new region name
    });
    console.log('New Region Inserted:', newRegion.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit();
  }
})();
