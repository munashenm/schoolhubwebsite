import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/ui/PagePrimitives";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { admissionsFeatures } from "@/lib/content";

export function AdmissionsSection() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Online applications"
              title="Take your admissions online"
              description="Accept applications, review documents, approve or reject applicants, and convert accepted applicants into enrolled students — without rebuilding your intake process in spreadsheets."
            />
            <div className="mt-8">
              <FeatureList items={admissionsFeatures} />
            </div>
            <div className="mt-8">
              <Button href="/demo">Request a Demo</Button>
            </div>
          </div>
          <ProductScreenshot
            title="Admissions workspace"
            description="Review and track online applications."
            alt="SchoolHub admissions and online applications screenshot placeholder"
          />
        </div>
      </Container>
    </Section>
  );
}
