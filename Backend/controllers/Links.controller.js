import Link from '../models/Link.model.js';

// Add a new link (book or video) for a kid by a parent
export const addLink = async (req, res) => {
  try {
    const { parent, kid, title, type, url } = req.body;
    const link = new Link({ parent, kid, title, type, url });
    await link.save();
    res.status(201).json(link);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all links for a specific kid
export const getLinksForKid = async (req, res) => {
  try {
    const { kidId } = req.params;
    const links = await Link.find({ kid: kidId });
    res.json(links);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all links for a specific parent
export const getLinksForParent = async (req, res) => {
  try {
    const { parentId } = req.params;
    const links = await Link.find({ parent: parentId });
    res.json(links);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
