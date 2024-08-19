import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import { StarIcon, Bookmark, GitForkIcon, EyeIcon, BellIcon, BookOpenIcon, CodeIcon, CircleIcon, FileIcon, FolderIcon, GlobeIcon, BookIcon } from "lucide-react"

export default function Dossier() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <BookOpenIcon className="mr-2 h-6 w-6 text-muted-foreground" />
          <h1 className="text-2xl font-bold">
            octocat / <span className="text-blue-500">Hello-World</span>
          </h1>
          <span className="ml-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            Project
          </span>
        </div>
        <div className="flex space-x-2">
          {/* <Button variant="outline" size="sm">
            <BellIcon className="mr-2 h-4 w-4" />
            Notifications
          </Button> */}
          <Button variant="outline" size="sm">
            <StarIcon className="mr-2 h-4 w-4" />
            Star
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center">
          <StarIcon className="mr-1 h-4 w-4" />
          <span className="font-semibold">1.5k</span>
          <span className="ml-1 text-muted-foreground">stars</span>
        </div>
        <div className="flex items-center">
          <EyeIcon className="mr-1 h-4 w-4" />
          <span className="font-semibold">84</span>
          <span className="ml-1 text-muted-foreground">watch</span>
        </div>
        <div className="flex items-center">
          <Bookmark className="mr-1 h-4 w-4" />
          <span className="font-semibold">234</span>
          <span className="ml-1 text-muted-foreground">saved</span>
        </div>
      </div>

      {/* <Tabs defaultValue="code" className="mb-6">
        <TabsList>
          <TabsTrigger value="code">
            <CodeIcon className="mr-2 h-4 w-4" />
            Code
          </TabsTrigger>
          <TabsTrigger value="issues">
            <CircleIcon className="mr-2 h-4 w-4" />
            Issues
          </TabsTrigger>
          <TabsTrigger value="pull-requests">
            <GitForkIcon className="mr-2 h-4 w-4" />
            Pull requests
          </TabsTrigger>
        </TabsList>
      </Tabs> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-card text-card-foreground rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-center p-4 border-b">
              {/* <div className="flex items-center">
                <span className="font-semibold">main</span>
                <Button variant="ghost" size="sm" className="ml-2">
                  <GitForkIcon className="mr-2 h-4 w-4" />
                  3 branches
                </Button>
              </div> */}
              <div className="flex items-center space-x-2">
                <Button size="sm">
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  Comment
                </Button>
                <Button variant="outline" size="sm">Report</Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between py-2 hover:bg-muted rounded px-2">
                <div className="flex items-center">
                  <FolderIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>src</span>
                </div>
                <span className="text-sm text-muted-foreground">Updated 2 days ago</span>
              </div>
              <div className="flex items-center justify-between py-2 hover:bg-muted rounded px-2">
                <div className="flex items-center">
                  <FileIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>README.md</span>
                </div>
                <span className="text-sm text-muted-foreground">Updated 5 days ago</span>
              </div>
              <div className="flex items-center justify-between py-2 hover:bg-muted rounded px-2">
                <div className="flex items-center">
                  <FileIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>package.json</span>
                </div>
                <span className="text-sm text-muted-foreground">Updated 1 week ago</span>
              </div>
            </div>
          </div>

          {/* README Preview */}
          <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">README.md</h2>
              <Button variant="ghost" size="sm">
                <FileIcon className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
            <div className="prose max-w-none">
              <h1>Hello World</h1>
              <p>
                Welcome to the Hello World project! This is a simple example repository to demonstrate
                various GitHub features and how to structure a basic project.
              </p>
              <h2>Getting Started</h2>
              <p>
                To get started with this project, follow these steps:
              </p>
              <ol>
                <li>Clone the repository</li>
                <li>Install dependencies</li>
                <li>Run the project</li>
              </ol>
              <h2>Installation</h2>
              <p>
                To install the project dependencies, run the following command:
              </p>
              <pre className="bg-muted p-4 rounded-md"><code>npm install</code></pre>
              <h2>Usage</h2>
              <p>
                After installation, you can run the project using:
              </p>
              <pre className="bg-muted p-4 rounded-md"><code>npm start</code></pre>
              <h2>Contributing</h2>
              <p>
                Contributions are welcome! Please feel free to submit a Pull Request.
              </p>
              <h2>License</h2>
              <p>
                This project is licensed under the MIT License - see the LICENSE file for details.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <p className="text-muted-foreground mb-4">
              This is a sample repository to demonstrate how to create a GitHub-like page using React and Tailwind CSS.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <GlobeIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-blue-500 hover:underline">https://example.com</a>
              </div>
              <div className="flex items-center">
                <BookIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>MIT License</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}