
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

// Utility types
type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  contact_number?: string | null;
  service: string | null;
  message: string | null;
  created_at?: string | null;
};

type Project = {
  id: string;
  title: string;
  firm: string;
  type: string;
  location: string;
  year: string;
  details: string;
  image: string | null;
  client: string;
  created_at?: string | null;
};

type GalleryItem = {
  id: string;
  image: string;
  description: string;
  created_at?: string | null;
};

// Main Admin Portal page
const AdminPortal = () => {
  // State for each entity
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  // Fetch data from Supabase on load
  useEffect(() => {
    // Fetch leads
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setContactSubmissions(data as ContactSubmission[]);
      });
    // Fetch projects
    supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setProjects(data as Project[]);
      });
    // Fetch gallery
    supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setGallery(data as GalleryItem[]);
      });
  }, []);

  // Section switching
  const [activeSection, setActiveSection] = useState<"leads" | "project" | "gallery">("leads");

  // Project form state
  const [projectForm, setProjectForm] = useState<Omit<Project, "id" | "created_at">>({
    title: "",
    firm: "",
    type: "",
    location: "",
    year: "",
    details: "",
    image: "",
    client: "",
  });

  // Gallery form state
  const [galleryForm, setGalleryForm] = useState<Omit<GalleryItem, "id" | "created_at">>({
    image: "",
    description: "",
  });

  // Handle form changes for projects
  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form changes for gallery
  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGalleryForm({
      ...galleryForm,
      [e.target.name]: e.target.value,
    });
  };

  // Handle project add (Supabase insert)
  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    // Insert to Supabase
    const { data, error } = await supabase.from("projects").insert([{ ...projectForm }]).select();
    if (!error && data && data.length > 0) {
      setProjects(prev => [data[0], ...prev]);
      setProjectForm({
        title: "",
        firm: "",
        type: "",
        location: "",
        year: "",
        details: "",
        image: "",
        client: "",
      });
    } else {
      // You might want to add toast for error (future enhancement)
      console.error("Error adding project", error);
    }
  };

  // Handle gallery add
  const handleAddGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from("gallery").insert([{ ...galleryForm }]).select();
    if (!error && data && data.length > 0) {
      setGallery(prev => [data[0], ...prev]);
      setGalleryForm({
        image: "",
        description: "",
      });
    } else {
      console.error("Error adding gallery item", error);
    }
  };

  // Fetch latest contact submissions
  const fetchContactSubmissions = async () => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setContactSubmissions(data as ContactSubmission[]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Portal</h1>
        {/* Section switch button group */}
        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={activeSection === "leads" ? "default" : "outline"}
            onClick={() => setActiveSection("leads")}
            className="flex-1"
          >
            Show Leads
          </Button>
          <Button
            variant={activeSection === "project" ? "default" : "outline"}
            onClick={() => setActiveSection("project")}
            className="flex-1"
          >
            Add Project
          </Button>
          <Button
            variant={activeSection === "gallery" ? "default" : "outline"}
            onClick={() => setActiveSection("gallery")}
            className="flex-1"
          >
            Add Gallery Image
          </Button>
        </div>

        {/* Content */}
        {activeSection === "leads" && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <Button variant="outline" className="mb-4" onClick={fetchContactSubmissions}>
              Refresh Contact Submissions
            </Button>
            {contactSubmissions.length === 0 ? (
              <div className="text-gray-500">No submissions yet.</div>
            ) : (
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {contactSubmissions.map((c) => (
                  <div key={c.id} className="border-b pb-2">
                    <div><span className="font-semibold">Name:</span> {c.name}</div>
                    <div><span className="font-semibold">Email:</span> {c.email}</div>
                    <div><span className="font-semibold">Company:</span> {c.company ?? "--"}</div>
                    <div><span className="font-semibold">Contact Number:</span> {c.contact_number ?? "--"}</div>
                    <div><span className="font-semibold">Service:</span> {c.service ?? "--"}</div>
                    <div><span className="font-semibold">Message:</span> {c.message ?? "--"}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeSection === "project" && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
            <form onSubmit={handleAddProject} className="space-y-3">
              <Input
                type="text"
                name="title"
                placeholder="Project Title"
                value={projectForm.title}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="firm"
                placeholder="Firm Name"
                value={projectForm.firm}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="type"
                placeholder="Project Type"
                value={projectForm.type}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="location"
                placeholder="Location"
                value={projectForm.location}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="year"
                placeholder="Year"
                value={projectForm.year}
                onChange={handleProjectChange}
                required
              />
              <Textarea
                name="details"
                placeholder="Project Details"
                value={projectForm.details}
                onChange={handleProjectChange}
                required
              />
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={projectForm.image}
                onChange={handleProjectChange}
              />
              <Input
                type="text"
                name="client"
                placeholder="Client Name"
                value={projectForm.client}
                onChange={handleProjectChange}
                required
              />
              <Button type="submit" className="w-full">Add Project</Button>
            </form>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Project List</h3>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {projects.map((p) => (
                  <div key={p.id} className="border-b pb-1">
                    <div><b>{p.title}</b> ({p.year}) - {p.firm}</div>
                    <div className="text-xs text-gray-600">Client: {p.client}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "gallery" && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Gallery Management</h2>
            <form onSubmit={handleAddGallery} className="flex flex-col gap-4 mb-4">
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                value={galleryForm.image}
                onChange={handleGalleryChange}
                required
              />
              <Input
                type="text"
                name="description"
                placeholder="Description"
                value={galleryForm.description}
                onChange={handleGalleryChange}
                required
              />
              <Button type="submit">Add Photo</Button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gallery.map((item) => (
                <div key={item.id} className="border rounded overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-32 object-cover"
                    />
                  )}
                  <div className="p-2 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
