import { useEffect } from "react"

interface Meta {
  title: string
  description?: string
}

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute("name", name)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

/** Sets the document title and description for a page (client-side SEO). */
export function useDocumentMeta({ title, description }: Meta) {
  useEffect(() => {
    document.title = title
    if (description) setMetaTag("description", description)
  }, [title, description])
}
