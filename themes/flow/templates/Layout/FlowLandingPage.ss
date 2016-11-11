<div class="flow-panels-wrapper">
    <% loop $FlowPanels %>
        <a href="$PanelUrlLink" class="panel-link">
            <div class="panel $PanelType" style="background-color: $HashColor;">
                <% with $PanelImage.SetWidth(800) %>
                    <div class="panel-img" style="background-image: url('$URL'); width:$Width; height: $Height;"></div>
                <% end_with %>
                <div class="flow-panel-text-wrap $ColorClass" style="background-color: $HashColor;">
                    <div class="panel-text">$PanelText</div>
                    <div class="panel-arrow"></div>
                </div>
            </div>
        </a>
    <% end_loop %>
</div>