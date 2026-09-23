import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { screenshots } from "@/lib/screenshots";

const featured = [
  screenshots.dashboard,
  screenshots.analytics,
  screenshots.studentDashboard,
  screenshots.lecturerDashboard,
  screenshots.studentLogin,
  screenshots.backup,
  screenshots.applications,
  screenshots.timetable,
] as const;

export function ScreenshotGallery() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Inside SchoolHub"
          title="Real product screens from the platform"
          description="A look at admissions, portals, academics, operations and administration — as they appear in SchoolHub."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {featured.map((shot) => (
            <ProductScreenshot
              key={shot.src}
              src={shot.src}
              title={shot.title}
              description={shot.description}
              alt={shot.alt}
              aspect="wide"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
