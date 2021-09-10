import React from "react";
import type { TViewProps } from "@/types";
import { OrchestSessionsConsumer } from "@/hooks/orchest";
import { Layout } from "@/components/Layout";
import PipelineList from "@/components/PipelineList";
import ProjectBasedView, {
  IProjectBasedViewProps,
} from "@/components/ProjectBasedView";
import { useCustomRoute } from "@/hooks/useCustomRoute";

export interface IPipelinesViewProps
  extends TViewProps,
    IProjectBasedViewProps {}

const PipelinesView: React.FC<IPipelinesViewProps> = () => {
  const { projectId } = useCustomRoute();
  return (
    <OrchestSessionsConsumer>
      <Layout>
        <ProjectBasedView projectId={projectId}>
          <PipelineList projectId={projectId} key={projectId} />
        </ProjectBasedView>
      </Layout>
    </OrchestSessionsConsumer>
  );
};

export default PipelinesView;
